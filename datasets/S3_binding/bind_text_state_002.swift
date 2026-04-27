import SwiftUI

struct Childbts002: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts002-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts002-yes" : "bts002-no")
            Childbts002(f: $flag)
        }
        .padding()
    }
}
