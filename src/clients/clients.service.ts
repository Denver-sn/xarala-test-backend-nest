import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Client } from 'src/interfaces/client.interface';




@Injectable()
export class ClientsService {
  constructor(
    @Inject('CLIENT_MODEL')
    private clientModel: Model<Client>
  ){}

  async create(client): Promise<Client> {
    const createdClient = new this.clientModel(client);
    return await createdClient.save();
  }
  
  // update
  async update(id: string, client): Promise<Client> {
    return await this.clientModel.findByIdAndUpdate(
      id,
      client,
      { new: true }
    )
  }

  // delete
  async delete(id: string): Promise<Client> {
    return await this.clientModel.findByIdAndRemove(id);
  }

  // get All
  async findAll(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }
}
