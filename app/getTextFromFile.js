export default async function getTextFromFile(path) {
    const res = await fetch(`${path}`);

    if(!res.ok) {
        throw res;
    }

    return res.text();
}