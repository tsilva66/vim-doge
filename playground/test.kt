/**
 * This file contains test scenarios and their expected results. You should be
 * able to generate the examples below.
 */

 // Variable types
 // - var
 // - val (read-only)

// =============================================================================
// Functions
// =============================================================================

/**
 * TODO
 * @param a TODO
 * @param b TODO
 * @return TODO
 */
fun sum(a: Int, b: Int): Int {
  return a + b
}

/**
 * TODO
 * @param a TODO
 * @param b TODO
 * @return TODO
 */
fun sum(a: Int, b: Int) = a + b

/**
 * TODO
 * @param a TODO
 * @param b TODO
 * @return TODO
 */
fun printSum(a: Int, b: Int) {
  println("sum of $a and $b is ${a + b}")
}

/**
 * TODO
 * @param map TODO
 * @param str TODO
 * @return TODO
 */
fun parseInt(map: MutableMap<String, Any?>, str: String): Int? {}

/**
 * TODO
 * @param i TODO
 * @param lst TODO
 * @param str TODO
 * @param map TODO
 * @param str TODO
 * @return TODO
 */
fun parseInt(i: Boolean = 0, lst: List<*, <T>>, str: String.() -> Unit, map: MutableMap<String, Any?>, str: List<String, <T>>): Int? {}

/**
 * TODO
 * @param json TODO
 * @return TODO
 */
inline fun <reified T: Any> Gson.fromJson(json: JsonElement): T = this.fromJson(json, T::class.java) {}

/**
 * TODO
 * @param onetime TODO
 * @param callback TODO
 * @return TODO
 */
fun listenForPackageChanges(onetime: Boolean = true, callback: () -> Unit): Int? = object : BroadcastReceiver() {

/**
 * TODO
 * @return TODO
 */
inline fun <reified T : Enum<T>> printAllValues() {
  print(enumValues<T>().joinToString { it.name })
}

/**
 * TODO
 * @param x TODO
 * @return TODO
 */
fun <T> id(x: T): T = x

/**
 * TODO
 * @param i TODO
 * @return TODO
 */
open data fun asNullable(i: Foo?) {}

/**
 * TODO
 * @param x TODO
 * @return TODO
 */
fun demo(x: Comparable<Number>) {}

/**
 * TODO
 * @param group TODO
 * @param user TODO
 * @param test TODO
 * @return TODO
 */
fun readStar(group: Group<*>, user: User<*>, test: Boolean) {}

/**
 * TODO
 * @param group TODO
 * @return TODO
 */
fun readOut(group: Group<out Animal>) {}

/**
 * TODO
 * @param group TODO
 * @return TODO
 */
fun readIn(group: Group<in Nothing>) {}

/**
 * TODO
 * @param list TODO
 * @return TODO
 */
fun acceptAnyList(list: List<Any?>) {}

/**
 * TODO
 * @param from TODO
 * @param to TODO
 * @return TODO
 */
fun copy(from: Array<Any>, to: Array<Any>) {}

// =============================================================================
// Functions: visibility modifiers
// =============================================================================
// Options: public | protected | private | inline 

/**
 * TODO
 * @param list TODO
 * @return TODO
 */
private fun foo(list: List<Any?>) {}

// =============================================================================
// Extension Functions
// =============================================================================
/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun <T> MutableList<Int>.swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun MutableList<Int>.swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun <T> MutableList.swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun MutableList.swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @param index1 TODO
 * @param index2 TODO
 * @return TODO
 */
fun <T> MutableList<T>.swap(index1: Int, index2: Int) {}

/**
 * TODO
 * @return TODO
 */
fun Any?.toString(): String {
  if (this == null) return "null"
  // after the null check, 'this' is autocast to a non-null type, so the toString() below
  // resolves to the member function of the Any class
  return toString()
}

// =============================================================================
// Classes: Implementation by Delegation
// =============================================================================
/**
 * TODO
 * @param b TODO
 */
class Derived(b: Base) : Base by b

class Delegate {
  /**
   * TODO
   * @param thisRef TODO
   * @param property TODO
   * @return TODO
   */
  operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
    return "$thisRef, thank you for delegating '${property.name}' to me!"
  }

  /**
   * TODO
   * @param thisRef TODO
   * @param property TODO
   * @param value TODO
   * @return TODO
   */
  operator fun setValue(thisRef: Any?, property: KProperty<*>, value: String) {
    println("$value has been assigned to '${property.name}' in $thisRef.")
  }
}

/**
 * TODO
 * @param map TODO
 */
class MutableUser(val map: MutableMap<String, Any?>) {
  var name: String by map
  var age: Int     by map
}

class ResourceDelegate<T> : ReadOnlyProperty<MyUI, T> {
  /**
   * TODO
   * @param thisRef TODO
   * @param property TODO
   * @return TODO
   */
  override fun getValue(thisRef: MyUI, property: KProperty<*>): T { ... }
}

/**
 * TODO
 * @param id TODO
 */
class ResourceLoader<T>(id: ResourceID<T>) {
  /**
   * TODO
   * @param thisRef TODO
   * @param prop TODO
   * @return TODO
   */
  operator fun provideDelegate(
      thisRef: MyUI,
      prop: KProperty<*>
  ): ReadOnlyProperty<MyUI, T> {
    checkProperty(thisRef, prop.name)
    // create delegate
    return ResourceDelegate()
  }

  /**
   * TODO
   * @param thisRef TODO
   * @param name TODO
   * @return TODO
   */
  private fun checkProperty(thisRef: MyUI, name: String) { ... }
}

class MyUI {
  /**
   * TODO
   * @param id TODO
   * @return TODO
   */
  fun <T> bindResource(id: ResourceID<T>): ResourceLoader<T> { ... }

  val image by bindResource(ResourceID.image_id)
  val text by bindResource(ResourceID.text_id)
}


// =============================================================================
// Classes: Companion Object Extensions
// =============================================================================
class MyClass {
  companion object { }
}

/**
 * TODO
 * @return TODO
 */
fun MyClass.Companion.foo() { ... }

// =============================================================================
// Inline classes
// =============================================================================
/**
 * TODO
 * @param s TODO
 */
inline class Name(val s: String) {
  val length: Int
  get() = s.length

  /**
   * TODO
   * @return TODO
   */
  fun greet() {
    println("Hello, $s")
  }
}

// =============================================================================
// Data classes
// =============================================================================
/**
 * TODO
 * @param name TODO
 * @param age TODO
 */
data class User(val name: String, val age: Int)

// =============================================================================
// Inner classes
// =============================================================================
class Outer {
  private val bar: Int = 1
  inner class Inner {
    /**
     * TODO
     * @return TODO
     */
    fun foo() = bar
  }
}

// =============================================================================
// Enum classes
// =============================================================================
/**
 * TODO
 * @param rgb TODO
 */
enum class Color(val rgb: Int) {
  RED(0xFF0000),
  GREEN(0x00FF00),
  BLUE(0x0000FF)
}

enum class RGB { RED, GREEN, BLUE }

// =============================================================================
// Classes: primary constructors
// =============================================================================
/**
 * TODO
 * @param firstName TODO
 */
class Person constructor(firstName: String) { ... }

/**
 * TODO
 * @param a TODO
 */
class C private constructor(a: Int) { ... }

/**
 * TODO
 * @param firstName TODO
 */
class Person(firstName: String) { ... }

// =============================================================================
// Classes: secondary constructors
// =============================================================================
class Person {
  /**
   * TODO
   * @param parent TODO
   */
  constructor(parent: Person) {
    parent.children.add(this)
  }
}

/**
 * TODO
 * @param name TODO
 */
class Person(val name: String) {
  /**
   * TODO
   * @param name TODO
   * @param parent TODO
   */
  constructor(name: String, parent: Person) : this(name) {
    parent.children.add(this)
  }
}

// =============================================================================
// Classes: inheritance
// =============================================================================
class MyView : View {
  /**
   * TODO
   * @param ctx TODO
   */
  protected constructor(ctx: Context) : super(ctx)

  /**
   * TODO
   * @param ctx TODO
   * @param attrs TODO
   */
  constructor(ctx: Context, attrs: AttributeSet) : super(ctx, attrs)
}

// =============================================================================
// Abstract classes & methods
// =============================================================================

/**
 * TODO
 * @param name TODO
 * @param color TODO
 * @param weight TODO
 */
abstract class Vehicle(val name: String, val color: String, val weight: Double) {
  /**
   * TODO
   * @param t TODO
   * @param u TODO
   * @return TODO
   */
  abstract fun signal(t: Int, u: Int) = apply(t, u)
}

// =============================================================================
// Classes: methods
// =============================================================================
class Bar2 : Foo {
  /**
   * TODO
   * @return TODO
   */
  override fun v() {}

  /**
   * TODO
   * @return TODO
   */
  final override fun v() {}
}

open class Base {
  /**
   * TODO
   * @return TODO
   */
  open fun v() {}

  /**
   * TODO
   * @return TODO
   */
  fun nv() {}
}


/**
 * TODO
 */
class Derived() : Base() {
  /**
   * TODO
   * @return TODO
   */
  override fun v() { ... }
}

open class Foo {
  /**
   * TODO
   * @return TODO
   */
  open fun f() { println("Foo.f()") }

  open val x: Int get() = 1
}

class Bar : Foo() {
  /**
   * TODO
   * @return TODO
   */
  override fun f() {
    super.f()
    println("Bar.f()")
  }

  override val x: Int get() = super.x + 1
}

// =============================================================================
// Classes: interfaces
// =============================================================================
interface A {
  /**
   * TODO
   * @return TODO
   */
  fun foo() { print("A") }
}

interface B {
  /**
   * TODO
   * @return TODO
   */
  fun foo() { print("B") }

  /**
   * TODO
   * @return TODO
   */
  fun bar() { print("bar") }
}

class D : A, B {
  /**
   * TODO
   * @return TODO
   */
  override fun foo() {
    super<A>.foo()
    super<B>.foo()
  }

  /**
   * TODO
   * @return TODO
   */
  override fun bar() {
    super<B>.bar()
  }
}

/**
 * TODO
 */
external class MyClass() {}
