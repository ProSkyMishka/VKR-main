import SwiftUI

struct Childbb006: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb006-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb006(isOn: $on)
            Text(on ? "bb006-on" : "bb006-off").font(.headline)
        }
        .padding()
    }
}
