import SwiftUI

struct Childbts003: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts003-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts003-yes" : "bts003-no")
            Childbts003(f: $flag)
        }
        .padding()
    }
}
