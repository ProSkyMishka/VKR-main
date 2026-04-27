import SwiftUI

struct Childbts014: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts014-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts014-yes" : "bts014-no")
            Childbts014(f: $flag)
        }
        .padding()
    }
}
