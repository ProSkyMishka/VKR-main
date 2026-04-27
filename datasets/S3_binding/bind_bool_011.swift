import SwiftUI

struct Childbb011: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb011-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb011(isOn: $on)
            Text(on ? "bb011-on" : "bb011-off").font(.headline)
        }
        .padding()
    }
}
