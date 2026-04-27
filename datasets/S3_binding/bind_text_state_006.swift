import SwiftUI

struct Childbts006: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts006-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts006-yes" : "bts006-no")
            Childbts006(f: $flag)
        }
        .padding()
    }
}
