import SwiftUI

struct Childbts008: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts008-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts008-yes" : "bts008-no")
            Childbts008(f: $flag)
        }
        .padding()
    }
}
