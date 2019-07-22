/**
 * <p>
 *   Description: StringUtils
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-22 10:24
 */

import {Tools} from './Tools'

export class StringUtils {

  /**
   * 删除多余空格
   * @param str
   */
  public static trim(str: string): string{

    if(Tools.isEmpty(str)) {
      return '';
    }

    return str.trim();
  }
}
