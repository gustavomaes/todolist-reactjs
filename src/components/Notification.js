import { NotificationManager } from 'react-notifications'

const createNotification = (type, message, title) => {
    switch (type) {
        case 'success':
            NotificationManager.success(message, title)
            break
        case 'error':
            NotificationManager.error(message, title, 5000)
            break
        default:
            break
    }
}

export default createNotification
