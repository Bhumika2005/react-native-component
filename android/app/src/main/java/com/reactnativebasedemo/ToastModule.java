package com.reactnativebasedemo;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap; 
import android.widget.Toast;
import android.util.Log;
import com.facebook.react.bridge.Callback;

public class ToastModule extends ReactContextBaseJavaModule{
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";


   public ToastModule(ReactApplicationContext reactContext){
       super(reactContext);
   }

  @Override
  public String getName() {
    return "ToastModule";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    Log.d("ToastModule","getConstants method is called");
    return constants;
  }

   @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
    Log.d("ToastModule","Show method is called");
  }

  @ReactMethod
  public void squareMe(Callback callback) {
    int number=15;
    callback.invoke(null,number);
  }
}