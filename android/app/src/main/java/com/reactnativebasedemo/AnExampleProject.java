package com.reactnativebasedemo;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactnativebasedemo.ToastModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import android.util.Log;

public class AnExampleProject implements ReactPackage {

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new ToastModule(reactContext));
    Log.d("ToastModule","createNativeModules method is called");
    return modules;
  }

}