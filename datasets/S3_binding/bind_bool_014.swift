import SwiftUI

struct Childbb014: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb014-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb014(isOn: $on)
            Text(on ? "bb014-on" : "bb014-off").font(.headline)
        }
        .padding()
    }
}
