import { Module } from '@nestjs/common';
import { AutoCompleteController } from './auto_complete.controller';
import { AutoCompleteService } from './auto_complete.service';

@Module({
  controllers: [AutoCompleteController],
  providers: [AutoCompleteService]
})
export class AutoCompleteModule {}
