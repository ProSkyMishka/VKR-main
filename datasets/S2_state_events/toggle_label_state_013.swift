import SwiftUI

struct ContentView: View {
    @State private var on = false

    var body: some View {
        VStack(spacing: 10) {
            Toggle("tl013-switch", isOn: $on)
                .padding(.horizontal)
            Text(on ? "tl013-on" : "tl013-off")
                .font(.headline)
                .foregroundColor(on ? .green : .gray)
        }
        .padding()
    }
}
