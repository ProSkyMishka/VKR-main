import SwiftUI

struct Childbb005: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb005-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb005(isOn: $on)
            Text(on ? "bb005-on" : "bb005-off").font(.headline)
        }
        .padding()
    }
}
