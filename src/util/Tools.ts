/**
 * <p>Description: this.</p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-12 16:25
 */

/**
 * 工具类
 */
export class Tools{

  protected constructor(){};

  /**
   * 判断是否为空
   * @param obj
   */
  public static isNull(obj: any): boolean {
    return obj === undefined || obj === null;
  }

  /**
   * 判断是否为空
   * @param obj
   */
  public static isEmpty(obj: any): boolean {
    return this.isNull(obj) || obj === '';
  }

  /**
   * 处理空值
   * @param obj
   * @param defaultValue
   */
  public static dealNull<E>(obj: E, defaultValue: E) {
    return this.isNull(obj) ? defaultValue : obj;
  }

  /**
   * 处理空值
   * @param obj
   * @param defaultValue
   */
  public static dealEmpty<E>(obj: E, defaultValue: E) {
    return this.isEmpty(obj) ? defaultValue : obj;
  }

  /**
   *
   * @param obj
   * @param msg
   */
  public static notNull(obj: any, msg: string = 'Not null') {
    if(this.isNull(obj)) {
      throw new Error(msg);
    }
  }

  /**
   *
   * @param obj
   * @param msg
   */
  public static notEmpty(obj: any, msg: string = 'Not empty') {
    if(this.isEmpty(obj)) {
      throw new Error(msg);
    }
  }

  /**
   * 获取 JS 值
   * @param obj 对象
   * @param key 值
   * @param defaultValue 默认值
   */
  public static get<E>(
    obj: any,
    key: string,
    defaultValue?: E
  ): E | undefined {

    if(!obj || !key) {
      return defaultValue;
    }

    const keySpilt = key.split('.');
    if(keySpilt.length == 1) {
      return obj[key];
    }

    let objTmp = obj;
    for(let e in keySpilt) {

      const keyTmp = keySpilt[e];
      if(Tools.isEmpty(keyTmp)) {
        return defaultValue;
      }

      objTmp = objTmp[keyTmp];
      if(this.isNull(objTmp)) {
        return defaultValue;
      }
    }

    return objTmp;
  }
}
