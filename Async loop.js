async function fetchWithRetry(
    url,
    options = {},
    retries = 3
) {

    let delay = 500;

    for (let i = 0; i <= retries; i++) {

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Request Failed");
            }

            return response;

        } catch (error) {

            if (i === retries) {
                throw error;
            }

            await new Promise(resolve =>
                setTimeout(resolve, delay)
            );

            delay *= 2;
        }
    }
}