import SwiftUI

struct Childbts010: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts010-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts010-yes" : "bts010-no")
            Childbts010(f: $flag)
        }
        .padding()
    }
}
