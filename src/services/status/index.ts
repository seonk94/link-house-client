import { getStatusApi } from 'src/controller';

class StatusService {
  public getStatus() {
    return getStatusApi();
  }
}

export const statusService = new StatusService();
