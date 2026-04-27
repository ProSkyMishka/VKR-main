import SwiftUI

struct Childbts005: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts005-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts005-yes" : "bts005-no")
            Childbts005(f: $flag)
        }
        .padding()
    }
}
