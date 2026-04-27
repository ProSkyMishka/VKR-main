import SwiftUI

struct Childbb004: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb004-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb004(isOn: $on)
            Text(on ? "bb004-on" : "bb004-off").font(.headline)
        }
        .padding()
    }
}
