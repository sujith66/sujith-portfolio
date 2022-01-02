import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: '5408esrn',
    dataset: 'production',
    apiVersion: '2022-01-02',
    useCdn: true,
    token: ''
})
