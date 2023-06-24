import { Novu } from '@novu/node';

export const sendDigest = async (name) => {
    const novu = new Novu(process.env.YOUR_NOVU_API_KEY_HERE);

    await novu.subscribers.identify('digestSub', {
        firstName: "digest subscriber",
    });

    await novu.trigger('digest-showcase', {
        to: {
            subscriberId: 'digestSub'
        },
        payload: {
            name: name
        }
    });
}


