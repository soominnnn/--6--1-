import { Console } from '@woowacourse/mission-utils';

const INPUT_VIEW = {
  async readUserNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요. : ');
    return input;
  },
}