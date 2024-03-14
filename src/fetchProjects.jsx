import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'o04hbadyj8z1',
  environment: 'master',
  accessToken: 'mA5jG_tDKhjcA8mIlFC1bS9BCM9uhgh5ontdKPdx_Rg',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
