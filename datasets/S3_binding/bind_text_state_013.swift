import SwiftUI

struct Childbts013: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts013-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts013-yes" : "bts013-no")
            Childbts013(f: $flag)
        }
        .padding()
    }
}
