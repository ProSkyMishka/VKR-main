import SwiftUI

struct Childbts011: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts011-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts011-yes" : "bts011-no")
            Childbts011(f: $flag)
        }
        .padding()
    }
}
