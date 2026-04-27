import SwiftUI

struct ContentView: View {
    @State private var open = false
    var body: some View {
        VStack {
            if open {
                Text("acc008-shown")
                    .scaleEffect(1.2)
                    .transition(.scale.combined(with: .opacity))
            } else {
                Text("acc008-hidden")
                    .foregroundColor(.gray)
            }
            Button("acc008-flip") {
                withAnimation(.easeInOut) { open.toggle() }
            }
        }
        .padding()
    }
}
