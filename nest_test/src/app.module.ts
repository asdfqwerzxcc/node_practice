import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoCompleteModule} from './auto_complete/auto_complete.module';
import { AutoCompleteController } from './auto_complete/auto_complete.controller';
import { AutoCompleteService } from './auto_complete/auto_complete.service';

@Module({
  imports: [AutoCompleteModule],
  controllers: [AppController, AutoCompleteController],
  providers: [AppService, AutoCompleteService ],
})
export class AppModule {}
