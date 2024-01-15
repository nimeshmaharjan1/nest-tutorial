import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(@Query('role') role?: string) {
    return { data: { user: { role } } };
  }

  @Post()
  createUser(@Body() user: {}) {
    return { user };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id };
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, user: {}) {
    return { id, user };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
