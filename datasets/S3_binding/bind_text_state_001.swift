import SwiftUI

struct Childbts001: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts001-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts001-yes" : "bts001-no")
            Childbts001(f: $flag)
        }
        .padding()
    }
}
