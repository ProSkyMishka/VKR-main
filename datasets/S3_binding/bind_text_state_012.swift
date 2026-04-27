import SwiftUI

struct Childbts012: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts012-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts012-yes" : "bts012-no")
            Childbts012(f: $flag)
        }
        .padding()
    }
}
