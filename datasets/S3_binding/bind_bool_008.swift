import SwiftUI

struct Childbb008: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb008-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb008(isOn: $on)
            Text(on ? "bb008-on" : "bb008-off").font(.headline)
        }
        .padding()
    }
}
