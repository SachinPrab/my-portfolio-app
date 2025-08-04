import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from './sanity/schemas/project-schemas';
// import schemas from './sanity/schemas';
import schemas from './sanity/schemas/project-schemas';
const config = defineConfig({ 

    projectId: '1bhoetgx',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2025-08-04',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {
        types: [schemas]
    }
});

export default config;