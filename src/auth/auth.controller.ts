import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto'; // 仮定している登録用DTO

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const jwt = await this.authService.login(user);
    return { accessToken: jwt };
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    const user = await this.authService.register(registerDto);
    if (!user) {
      throw new UnauthorizedException('Registration failed');
    }
    const jwt = await this.authService.login(user);
    return { accessToken: jwt };
  }
}
