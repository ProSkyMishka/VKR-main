import SwiftUI

struct Childbts007: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts007-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts007-yes" : "bts007-no")
            Childbts007(f: $flag)
        }
        .padding()
    }
}
