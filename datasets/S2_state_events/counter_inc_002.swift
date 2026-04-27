import SwiftUI

struct ContentView: View {
    @State private var count = 2

    var body: some View {
        VStack(spacing: 12) {
            Text("ci002-count: \(count)")
                .font(.title3)
            Button("ci002-inc") { count += 3 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
