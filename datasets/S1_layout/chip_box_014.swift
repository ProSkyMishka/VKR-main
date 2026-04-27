import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip014-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 12)
                .padding(.vertical, 12)
                .frame(width: 94, height: 44)
                .background(Color.purple)
                .cornerRadius(22)
                .shadow(radius: 2)
        }
        .padding()
    }
}
