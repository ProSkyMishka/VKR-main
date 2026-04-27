import SwiftUI

struct Childbb010: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb010-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb010(isOn: $on)
            Text(on ? "bb010-on" : "bb010-off").font(.headline)
        }
        .padding()
    }
}
