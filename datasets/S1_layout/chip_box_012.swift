import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip012-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 10)
                .padding(.vertical, 10)
                .frame(width: 92, height: 42)
                .background(Color.purple)
                .cornerRadius(21)
                .shadow(radius: 2)
        }
        .padding()
    }
}
