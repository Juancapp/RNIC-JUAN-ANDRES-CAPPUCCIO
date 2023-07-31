interface TabParamList {
  [Routes.SCREEN_ONE]: undefined;
  [Routes.SCREEN_TWO]: undefined;
  [key: string]: any;
}

enum Routes {
  SCREEN_ONE = "SCREEN_ONE",
  SCREEN_TWO = "SCREEN_TWO",
}
