import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    public name: string;
    
    @IsNotEmpty()
    @IsEmail()
    public email: string;
    
    @IsNotEmpty()
    @IsString()
    public phone: string;
    
    @IsNotEmpty()
    @IsString()
    public status: string;
}
