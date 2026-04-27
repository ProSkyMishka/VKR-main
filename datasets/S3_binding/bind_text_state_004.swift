import SwiftUI

struct Childbts004: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts004-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts004-yes" : "bts004-no")
            Childbts004(f: $flag)
        }
        .padding()
    }
}
