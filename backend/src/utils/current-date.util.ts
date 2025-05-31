import { DateTime } from 'luxon';

export function getCurrentDatetime() {
    const now = DateTime.now().setZone('Asia/Jakarta'); 
    return now.toISO(); 
}
