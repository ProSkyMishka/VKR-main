import SwiftUI

struct Childbts009: View {
    @Binding var f: Bool
    var body: some View {
        Toggle("bts009-flag", isOn: $f)
    }
}

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        VStack {
            Text(flag ? "bts009-yes" : "bts009-no")
            Childbts009(f: $flag)
        }
        .padding()
    }
}
