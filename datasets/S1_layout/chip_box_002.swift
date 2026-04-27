import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip002-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 12)
                .padding(.vertical, 8)
                .frame(width: 82, height: 32)
                .background(Color.purple)
                .cornerRadius(16)
                .shadow(radius: 2)
        }
        .padding()
    }
}
