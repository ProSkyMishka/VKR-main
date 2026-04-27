import SwiftUI

struct ContentView: View {
    @State private var open = false
    var body: some View {
        VStack {
            if open {
                Text("acc002-shown")
                    .scaleEffect(1.2)
                    .transition(.scale.combined(with: .opacity))
            } else {
                Text("acc002-hidden")
                    .foregroundColor(.gray)
            }
            Button("acc002-flip") {
                withAnimation(.easeInOut) { open.toggle() }
            }
        }
        .padding()
    }
}
