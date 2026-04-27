import SwiftUI

struct Childbb003: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb003-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb003(isOn: $on)
            Text(on ? "bb003-on" : "bb003-off").font(.headline)
        }
        .padding()
    }
}
