import SwiftUI

struct Childbb001: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb001-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb001(isOn: $on)
            Text(on ? "bb001-on" : "bb001-off").font(.headline)
        }
        .padding()
    }
}
