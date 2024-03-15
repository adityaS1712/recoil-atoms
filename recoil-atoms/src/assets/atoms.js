
import {atom, selector} from "recoil"

export const networkAtom=atom({
    key:"networkAtom",
    default: 104
});

export const jobAtom=atom({
    key:"jobAtom",
    default: 0
});

export const myMessagingAtom=atom({
    key:"myMessagingAtom",
    default: 12
}); 

export const notificationAtom=atom({
    key:"notificationAtom",
    default: 12
}); 

export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get: ({get}) => {
        const networkCount=get(networkAtom)
        const jobCount=get(jobAtom)
        const messageCount=get(myMessagingAtom)
        const notificationCount=get(notificationAtom)
        return networkCount+jobCount+messageCount+notificationCount
    }
})
